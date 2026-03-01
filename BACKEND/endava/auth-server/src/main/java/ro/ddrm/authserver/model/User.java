package ro.ddrm.authserver.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import java.time.Instant;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "users")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

  public enum ROLES {
    USER,
    ADMIN;
  }

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  @Column(length = 36)
  private String id;

  @Column(nullable = false, length = 50) private String email;

  @Column(nullable = false, length = 60) private String password;

  @Builder.Default @Column(nullable = false) private Boolean verified = false;

  @Builder.Default
  @Enumerated(EnumType.STRING)
  @Column(nullable = false, length = 10)
  private ROLES role = ROLES.USER;

  @Column(nullable = false) private Instant createdAt;

  @Column(nullable = false) private Instant updatedAt;

  @PrePersist
  public void onCreate() {
    this.createdAt = Instant.now();
    this.updatedAt = Instant.now();
  }

  @PreUpdate
  public void onUpdate() {
    this.updatedAt = Instant.now();
  }
}
