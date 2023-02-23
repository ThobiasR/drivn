import {Button} from "react-bootstrap";

export const ReloadPageButton = () => {
        return (
            <div className="row p-2">
                <div className="col-12">
                    <Button
                        className="btn-danger"
                        onClick={() => {
                            window.location.reload();
                        }}
                    >
                        Reload Page
                    </Button>
                </div>
            </div>
        );
    }
;