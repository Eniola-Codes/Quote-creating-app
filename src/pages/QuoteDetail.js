import React, {useEffect} from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
    const match = useRouteMatch();
  const params = useParams();

  const {quotesid} = params;

  const {sendRequest, status, data : loadedQuote, error } = useHttp(getSingleQuote,true)

  
useEffect(() => {
    sendRequest(quotesid);
},[sendRequest,quotesid])

    if(status === 'pending')
    {
        return <div className='centered'>
            <LoadingSpinner/>
        </div>
    }

  if(error)
  {
    return <h1>{error}</h1>
  }

  if(!loadedQuote.text)
  {
    return <p>No Quote Found</p>
  }

  return (
    <>
    <h1>{params.quoteid}</h1>
    <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
    <Route path={match.url} exact>
        <div className='centered'>
      <Link className='btn--flat' to={`${match.url}/comments`}>Show Comments</Link>
      </div>
    </Route>
      <Route path={`${match.url}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
