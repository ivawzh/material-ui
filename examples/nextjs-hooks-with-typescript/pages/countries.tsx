import '../src/bootstrap';
// --- Post bootstrap -----
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
}))

const QUERY = gql`
  query {
    countries {
      name
    }
  }
`

export default function Institutions() {
  const classes = useStyles({})

  return (
    <Query query={QUERY}>
      {
        ({data, loading, error}) => {
          if (error) return <div>Error {error}</div>
          if (loading) return <div>Loading</div>

          return <div className={classes.root}>
            <Typography variant="h4" gutterBottom>
              Graphql
            </Typography>
            <ul>
              {data.countries.map(country => (
                <li key={country.name}>{country.name}</li>
              ))}
            </ul>
          </div>
        }
      }
    </Query>
  )
}
