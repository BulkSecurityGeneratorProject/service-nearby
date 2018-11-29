package com.service.nearby.repository;

import com.service.nearby.domain.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the Service entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {

    @Query(value = "select distinct service from Service service left join fetch service.users",
        countQuery = "select count(distinct service) from Service service")
    Page<Service> findAllWithEagerRelationships(Pageable pageable);

    @Query(value = "select distinct service from Service service left join fetch service.users")
    List<Service> findAllWithEagerRelationships();

    @Query("select service from Service service left join fetch service.users where service.id =:id")
    Optional<Service> findOneWithEagerRelationships(@Param("id") Long id);

}
