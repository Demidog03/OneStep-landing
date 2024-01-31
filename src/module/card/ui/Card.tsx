import React from 'react';

interface ConfigurableCardProps {
    bgColor: 'pink' | 'blue';
    title: string;
    text: string;
    imagePosition: 'left' | 'right';
    imageSrc: string;
}

const ConfigurableCard: React.FC<ConfigurableCardProps> = ({   bgColor,
                                                               title,
                                                               text,
                                                               imagePosition,
                                                               imageSrc,
}) => {
    const isImageOnLeft = imagePosition === 'left';
    const isPinkCard = bgColor === 'pink';

    return (
        <div
            className={`h-4 w-8 p-2 flex items-center justify-center bg-gradient-to-b from-${isPinkCard? 'f9ecf9' : 'e6f4ff'} to-ffffff`}>
            <div className={`${isImageOnLeft ? 'order-2 pl-6' : 'pr-6'}`}>
                <h5 className="text-black text-22">
                    {title}
                </h5>
                <p className="text-10">
                    {text}
                </p>
            </div>
            <div className={`${isImageOnLeft ? 'order-1' : 'order-3'} p-2`}>
                <img
                    className="max-h-12 max-w-12"
                    src={imageSrc}
                    alt={title}
                />
            </div>
        </div>
    );
};

export default ConfigurableCard;