package ro.ddrm.securitystarter.config;

import java.time.Duration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import jakarta.annotation.PostConstruct;
import lombok.Getter;


@Configuration
@Getter
public class JwtConfig {

  @Value("${jwt.secret-key}") private String secretKey;

  @Value("${jwt.access-token-expiry}") private Long accessTokenExpiry;

  @Value("${jwt.refresh-token-expiry}") private Long refreshTokenExpiry;

  private Duration durationOfAccessToken;
  private Duration durationOfRefreshToken;

  @PostConstruct
  public void init() {
    this.durationOfAccessToken = Duration.ofSeconds(accessTokenExpiry);
    this.durationOfRefreshToken = Duration.ofSeconds(refreshTokenExpiry);
  }
}
