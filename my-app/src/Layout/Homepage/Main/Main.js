import React, {Component} from 'react'
import {Container} from 'reactstrap'
import Heading from "../Heading/Heading";
import ArticleCard from "../../../Component/ArticleCard/ArticleCard";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div>
                <Heading/>

                <Container>
                    <ArticleCard/>
                    <ArticleCard/>
                    <ArticleCard/>
                    <ArticleCard/>
                    <ArticleCard/>
                </Container>

            </div>
        );
    }

}

export default Main