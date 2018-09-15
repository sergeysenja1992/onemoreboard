package ua.pp.ssenko.stories.service

import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import ua.pp.ssenko.stories.domain.Board
import ua.pp.ssenko.stories.domain.Account

@Service
@Transactional
class BoardService(
        val boardRepository: BoardRepository
) {



}


interface BoardRepository: CrudRepository<Board, Long> {
    fun findByOwner(owner: Account)
}