package ro.ddrm.authserver.dto.response;

import ro.ddrm.authserver.model.User;

public record UserDto(String id, String email, String password,
                      boolean verified, User.ROLES role) {}
