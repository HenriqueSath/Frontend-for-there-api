import React, { Component } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import api from '../../services/api'
import { Link } from 'react-router-dom'

import './styles.css'

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }

    componentDidMount() {
        this.loadProducts()
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`)

        const { docs, ...productInfo } = response.data

        this.setState({ products: docs, productInfo, page })
    }

    prevPage = () => {
        const { page, productInfo } = this.state

        if (page === 1) return

        const pageNumber = page - 1

        this.loadProducts(pageNumber)
    }

    nextPage = () => {
        const { page, productInfo } = this.state

        if (page === productInfo.pages) return

        const pageNumber = page + 1

        this.loadProducts(pageNumber)
    }

    render() {
        const { products, page, productInfo } = this.state

        return (

            <div className="productList">
                {products.map(product => (

                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <Link to={`/detail/${product._id}`} >Acessar</Link>
                    </article>

                ))}

                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>
                        <FiArrowLeft size={15} color="#ffffff" />
                        Anterior
                    </button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>
                        Próxima
                        <FiArrowRight size={15} color="#ffffff" />
                    </button>
                </div>
            </div>

        )
    }
}