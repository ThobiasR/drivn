import {Button} from "react-bootstrap";
import {useState} from "react";
import {getBurnNftTokenFullName} from "../../utils";

export const BurnNFT = ({
                             allTokens,
                             loading,
                             onBurn,
                         }) => {
    const [tokenOptions] = useState([...allTokens]);
    const [tokenId, setTokenId] = useState(allTokens[0]?.tokenId || null);
    const [errorMessage, setErrorMessage] = useState('');


    const handleToken1Selection = (e) => {
        const value = e.target.value;
        const newTokenId = Number(value);
        setTokenId(newTokenId);
    }

    if (allTokens.length === 0) {
        return null;
    }

    return (<>
        <div className="row mt-3">
            <div className="col-12 my-3">
                <h6>Increase Burn NFT score:</h6>
            </div>
            <div className="col-6 text-end fw-bold">
                <span>Token 1: </span>
                {
                    tokenOptions.length > 0 && <select
                        className="token-dropdown"
                        value={tokenId}
                        onChange={handleToken1Selection}
                    >
                        {
                            tokenOptions.map((option) => {
                                return <option
                                    key={option.tokenId}
                                    className="token-item"
                                    value={option.tokenId}
                                >
                                    {getBurnNftTokenFullName(option)}
                                </option>
                            })
                        }
                    </select>
                }
            </div>
            <div className="col-12 mt-3">
                <Button
                    disabled={!tokenId || loading}
                    className="btn-success"
                    onClick={() => {
                        setErrorMessage('');
                        onBurn(tokenId);                
                    }}
                >
                    {loading ? 'Burning...' : 'Burn'}
                </Button>
            </div>
        </div>
    </>);
};