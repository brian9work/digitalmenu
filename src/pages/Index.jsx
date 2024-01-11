import React from 'react';
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <div>
            <Link to="/digitalmenu/sushi">Sushi Maki</Link><br/>
            <Link to="/digitalmenu/burguers">Oyamel</Link><br/>
            <Link to="/digitalmenu/context">context</Link><br/>
        </div>
    );
}

export default Index;
