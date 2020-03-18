import React, { Component } from 'react'

export class form extends Component {
    render() {
        return (
            <form id="book-form">
            <div>
                <label for="title">Title</label>
                <input type="text" id="title" class="u-full-width"/>
            </div>
            <div>
                <label for="author">Author</label>
                <input type="text" id="author" class="u-full-width"/>
            </div>
            <div>
                <label for="isbn">ISBN#</label>
                <input type="text" id="isbn" class="u-full-width"/>
            </div>
            <div>
               <input type="submit" value="Submit" class="u-full-width"/>
            </div>

        </form>
        )
    }
}

export default form
