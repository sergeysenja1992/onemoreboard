package ua.pp.ssenko.stories.domain

import javax.persistence.*

@Entity
class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0
    @Column(unique = true)
    var email: String = ""

    constructor(email: String) {
        this.email = email;
    }

}


@Entity
class Board {
    constructor(name: String, owner: Account) {
        this.name = name
        this.owner = owner
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0
    var name: String

    @ManyToOne
    val owner: Account
}
