package ro.ddrm.productsserver.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import java.math.BigDecimal;
import java.time.Instant;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "products")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Product {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  @Column(length = 36)
  private String id;

  @Column(length = 100, nullable = false) private String title;

  @Column(length = 1000, nullable = false) private String description;

  @Column(nullable = false, precision = 10, scale = 2) private BigDecimal price;

  @Column(length = 256, nullable = false) private String image;

  @Column(nullable = false)
  @Builder.Default
  @Min(0)
  private Integer quantity = 0;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(nullable = false)
  private String categoryId;

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
