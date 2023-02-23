export const Tokens = ({tokens = [], getTokenFullName}) => {
    return <div className="row">
        <div className="col-3"/>
        <div className="col-6 text-start">
            {
                tokens.map((token) => {
                    return <p key={token.tokenId}>{getTokenFullName(token)}</p>
                })
            }
        </div>
        <div className="col-3"/>
    </div>;
};