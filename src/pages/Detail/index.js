import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

export default class Product extends Component {
    state = {
        product: {},
    }

    async componentDidMount() {
        const { id } = this.props.match.params

        const response = await api.get(`/products/${id}`)

        this.setState({ product: response.data })
    }

    render() {
        const { title, description, url } = this.state.product

        return (

            <div className="productInfo">
                <h1>{title}</h1>
                <p>{description}</p>

                <p>
                    URL: <a href={url} target="_blank">{url}</a>
                </p>

                <button>
                    <Link style={{ textDecoration: 'none', color: "#666666" }} to="/">
                        <FiArrowLeft size={15} color="#666666" /> Voltar pra home
                    </Link>
                </button>

            </div>
        )
    }
}