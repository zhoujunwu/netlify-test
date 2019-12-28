import React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => <div>{data.datoCmsTestarticle.testtitle}</div>

export default IndexPage

export const query = graphql`
  {
    datoCmsTestarticle {
      testtitle
    }
  }
`
