import React from "react"
import Typography from "material-ui/Typography"

import withRoot from "../lib/withRoot"

const IndexPage = () => (
  <div>
    <Typography variant="display1" gutterBottom>
      Welcome to your CommuniTii
    </Typography>
  </div>
)

export default withRoot(IndexPage)
