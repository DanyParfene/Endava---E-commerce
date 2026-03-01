package ro.ddrm.shared.dto.response;

public record SuccessResponse<T>(String message, T response) {}
