import React from "react"

class DataFetcher extends React.Component {
  state = {
    loading: false,
    data: null,
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch(this.props.url)
      .then((res) => res.json())
      .then((data) => this.setState({ loading: false, data: data }))
  }

  render() {
    //   desconstructing an object
    const { data, loading } = this.state

    return this.props.children({
      data,
      loading,
    })
  }
}

export default DataFetcher
