import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.array = ["Сообщение1", "Сообщение2", "Сообщение3", "Сообщение4", "Сообщение5", "Сообщение6" ]
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(st => {
            return {
                isLoggedIn: !st.isLoggedIn
            }
        })
    }

    render() {
        const listItems = this.array.map((number) =>
            <li>{number}</li>
        );

        //Если пользователь залогинен
        if (this.state.isLoggedIn) {
            return (
                <div>
                    <button onClick={this.handleClick}>Выйти</button>
                    <p>Ваши сообщения:{this.messages}</p>
                    <ul>{listItems}</ul>
                </div>
            )
        }

        return (
            <div>
                <button onClick={this.handleClick}>Войти</button>
                <p>Просмотр данных недоступен</p>
            </div>
        )
    }
}

export default App