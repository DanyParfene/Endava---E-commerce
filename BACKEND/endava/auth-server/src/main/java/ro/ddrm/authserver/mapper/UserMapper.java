package ro.ddrm.authserver.mapper;

import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.ReportingPolicy;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import ro.ddrm.authserver.dto.response.UserDto;
import ro.ddrm.authserver.model.User;
import ro.ddrm.authserver.security.CustomUserDetails;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.WARN)
public interface UserMapper {

  @Mapping(target = "authorities", source = "role",
           qualifiedByName = "roleToAuthorities")
  CustomUserDetails
  toCustomUserDetails(User user);

  @Named("roleToAuthorities")
  default List<GrantedAuthority> roleToAuthorities(User.ROLES role) {
    return List.of(new SimpleGrantedAuthority("ROLE_" + role));
  }

  UserDto toUserDto(User user);
}
