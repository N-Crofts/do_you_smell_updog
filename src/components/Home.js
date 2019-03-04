import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
        <div class="homePage">
            <div class="homeQuestion">
                Question: "Does it smell like updog in here?"
            </div>
            <a href="/updog">
                <img src="https://i2.wp.com/humourspot.com/wp-content/uploads/2018/05/u3lVlme.jpg" />
            </a>
        </div>
    )
  }
}
