package ua.pp.ssenko.stories.service

import getEmail
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import ua.pp.ssenko.stories.domain.Account
import java.security.Principal

@Service
@Transactional
class UserService(
        val userRepository: UserRepository
) {

    fun getOrCreateUser(principal: Principal): Account {
        val user = userRepository.findByEmail(principal.getEmail())
        return user ?: userRepository.save(Account(principal.getEmail()))
    }

}

interface UserRepository: CrudRepository<Account, Long> {
    fun findByEmail(email: String): Account?
}
