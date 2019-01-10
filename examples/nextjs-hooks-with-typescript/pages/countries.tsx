import '../src/bootstrap';
// --- Post bootstrap -----
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
}))

const QUERY = gql`
  {
    countries {
      name
    }
  }
`

export default function Institutions() {
  // const { data } = useQuery(QUERY)
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Graphql
      </Typography>
      {/* <ul>
        {data.countries.map(country => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul> */}
    </div>
  )
}
