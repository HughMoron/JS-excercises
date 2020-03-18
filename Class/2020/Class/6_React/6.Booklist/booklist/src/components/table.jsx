import React, { Component } from 'react'

export class table extends Component {
    render() {
        return (
            <table class="u-full-width">
            <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>ISBN</th>
                  <th></th>
                </tr>
              </thead>
              <tbody id="book-list"></tbody>
        </table>
        )
    }
}

export default table
