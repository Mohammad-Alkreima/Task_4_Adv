import "./CopyRight.css"

interface CopyRightProps {
    copy: string;
    terms: string;
    policy: string
}

const CopyRight = ({copy, terms, policy} : CopyRightProps) => {
    return (
        <div className="copyRight">
            <p className="copy">{copy}</p>
            <div className="termspolicy">
                <p className="terms">{terms}</p>
                <p className="policy">{policy}</p>
            </div>
        </div>
    )
}

export default CopyRight
