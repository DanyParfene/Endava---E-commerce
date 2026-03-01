package ro.ddrm.shared.redis;

import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.ComponentScan;

@AutoConfiguration
@ConditionalOnProperty(name = "redis.enabled", havingValue = "true")
@ComponentScan(basePackageClasses = RedisService.class)
public class RedisAutoConfiguration {}
