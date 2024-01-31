import React from 'react';

interface ConfigurableCardProps {
    cardColor?: 'f9ecf9' | 'e6f4ff';
    textBoxStyles?: string;
    imageBoxStyles?: string;
    title?: string;
    text?: string;
    textStyles?: string;
    imagePosition?: 'left' | 'right';
    imageSrc?: string;
    imageStyles?: string;
}

const ConfigurableCard: React.FC<ConfigurableCardProps> = ({   cardColor,
                                                               textBoxStyles,
                                                               imageBoxStyles,
                                                               title,
                                                               text,
                                                               textStyles,
                                                               imagePosition,
                                                               imageSrc,
                                                               imageStyles
}) => {
    const isImageOnLeft = imagePosition === 'left';
    const isPinkCard = cardColor === 'f9ecf9';

    return (
        <div
            className={`h-4 w-8 p-2 flex items-center justify-center bg-gradient-to-b from-${isPinkCard? 'f9ecf9' : 'e6f4ff'} to-ffffff`}>
            <div className={`${textBoxStyles} ${isImageOnLeft ? 'order-2 pl-6' : 'pr-6'}`}>
                <h5 className="text-black text-22">
                    {title}
                </h5>
                <p className={`${textStyles} text-10`}>
                    {text}
                </p>
            </div>
            <div className={`${imageBoxStyles} ${isImageOnLeft ? 'order-1' : 'order-3'} p-2`}>
                <img
                    className={`${imageStyles} max-h-12 max-w-12`}
                    src={imageSrc}
                    alt={title}
                />
            </div>
        </div>
    );
};

export default ConfigurableCard;