package ro.ddrm.productsserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ro.ddrm.productsserver.model.Product;


public interface ProductRepository extends JpaRepository<Product, String> {}
