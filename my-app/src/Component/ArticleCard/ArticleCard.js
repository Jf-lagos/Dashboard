import React from 'react'
import {Card, CardImg, CardTitle, CardBody, CardSubtitle, Badge} from 'reactstrap'
import classes from './ArticleCard.module.css'

const ArticleCard = (props) => {
    return (
        <Card className={classes.ArticleCard}>
            <CardImg
                top
                width="100%"
                src={'https://placeimg.com/325/180/any'}
                alt="Card image cap"
                className={classes.CardImage}
            />
            <CardBody className={classes.CardBody}>
                <CardTitle
                    className={classes.CardTitle}>
                    Test Title
                </CardTitle>
                <CardSubtitle className={classes.CardSubtitle}>
                    <Badge className={classes.ArticleLabel} color="primary">
                        Topic
                    </Badge>
                </CardSubtitle>
            </CardBody>
        </Card>
    )
}
export default ArticleCard