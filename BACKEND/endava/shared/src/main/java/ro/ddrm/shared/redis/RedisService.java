package ro.ddrm.shared.redis;

import java.time.Duration;
import java.util.Optional;

import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;


@Service
public class RedisService {

  private final StringRedisTemplate redisTemplate;

  public RedisService(StringRedisTemplate redisTemplate) {
    this.redisTemplate = redisTemplate;
  }

  public void setKey(String key, String value) {
    redisTemplate.opsForValue().set(key, value);
  }

  public void setKey(String key, String value, Duration duration) {
    redisTemplate.opsForValue().set(key, value, duration);
  }

  public Optional<String> getKey(String key) {
    return Optional.ofNullable(redisTemplate.opsForValue().get(key));
  }

  public boolean existsKey(String key) {
    return Boolean.TRUE.equals(redisTemplate.hasKey(key));
  }

  public Optional<String> deleteKey(String key) {
    return Optional.ofNullable(redisTemplate.opsForValue().getAndDelete(key));
  }
}
