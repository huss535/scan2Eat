
interface InfoSectionProps {
    title: string,
    content: string
}

const InfoSection = ({ title, content }: InfoSectionProps) => {

    return (
        <div className="info-section">
            <h2>{title}</h2>
            <hr />
            <p>{content}</p>
        </div>
    );
}

export default InfoSection;