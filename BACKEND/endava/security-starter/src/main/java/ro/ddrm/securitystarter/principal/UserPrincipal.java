package ro.ddrm.securitystarter.principal;

import java.util.List;

import org.springframework.security.core.GrantedAuthority;

public record UserPrincipal(String id, List<GrantedAuthority> authorities) {}
