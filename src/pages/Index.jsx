import React from 'react';
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <div>
            <Link to="/sushi">Sushi Maki</Link><br/>
            <Link to="/burguers">Oyamel</Link><br/>
            <Link to="/context">context</Link><br/>
        </div>
    );
}

export default Index;
