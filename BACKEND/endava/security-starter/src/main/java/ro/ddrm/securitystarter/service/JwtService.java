package ro.ddrm.securitystarter.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import javax.crypto.SecretKey;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;
import ro.ddrm.securitystarter.config.JwtConfig;
import ro.ddrm.securitystarter.principal.UserPrincipal;
import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.ObjectMapper;

@Service
public class JwtService {

  private final JwtConfig jwtConfig;
  private final SecretKey secretKey;
  private final JwtParser jwtParser;
  private final ObjectMapper objectMapper;

  public JwtService(JwtConfig jwtConfig, ObjectMapper objectMapper) {
    this.jwtConfig = jwtConfig;
    this.secretKey = Keys.hmacShaKeyFor(
        jwtConfig.getSecretKey().getBytes(StandardCharsets.UTF_8));
    this.jwtParser = Jwts.parser().verifyWith(secretKey).build();
    this.objectMapper = objectMapper;
  }

  public String getAccessToken(UserPrincipal principal) {
    return getToken(principal, jwtConfig.getAccessTokenExpiry());
  }

  public String getRefreshToken(UserPrincipal principal) {
    return getToken(principal, jwtConfig.getRefreshTokenExpiry());
  }

  private String getToken(UserPrincipal principal, Long expiry) {

    Instant time = Instant.now();

    List<String> roles = principal.authorities()
                             .stream()
                             .map(GrantedAuthority::getAuthority)
                             .toList();

    return Jwts.builder()
        .issuedAt(Date.from(time))
        .expiration(Date.from(time.plusSeconds(expiry)))
        .subject(principal.id())
        .claim("roles", roles)
        .signWith(secretKey)
        .compact();
  }

  public UserPrincipal parseToken(String token) {

    Claims claims = jwtParser.parseSignedClaims(token).getPayload();

    String id = claims.getSubject();

    List<String> roles = objectMapper.convertValue(
        claims.get("roles"), new TypeReference<List<String>>() {});

    List<GrantedAuthority> authorities = roles.stream()
                                             .map(SimpleGrantedAuthority::new)
                                             .collect(Collectors.toList());

    return new UserPrincipal(id, authorities);
  }
}
