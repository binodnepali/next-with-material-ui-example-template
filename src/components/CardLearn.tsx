import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

interface CardLearnProps {
  title: string
  description: string
  href: string
}
export const CardLearn = ({ title, description, href }: CardLearnProps) => {
  return (
    <Card sx={{ minWidth: 300 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={href}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
