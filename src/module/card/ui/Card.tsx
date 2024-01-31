import React from 'react';

interface ConfigurableCardProps {
    cardStyles?: string;
    textBoxStyles?: string;
    imageBoxStyles?: string;
    title?: string;
    text?: string;
    titleStyles?: string;
    textStyles?: string;
    imagePosition?: 'left' | 'right';
    imageSrc?: string;
    imageStyles?: string;
}

const ConfigurableCard: React.FC<ConfigurableCardProps> = ({   cardStyles,
                                                               textBoxStyles,
                                                               imageBoxStyles,
                                                               title,
                                                               text,
                                                               titleStyles,
                                                               textStyles ,
                                                               imagePosition,
                                                               imageSrc,
                                                               imageStyles
}) => {
    const isImageOnLeft = imagePosition === 'left';

    return (
        <div className={cardStyles}>
            <div className={`${textBoxStyles} ${isImageOnLeft ? 'order-2 pl-6' : 'pr-6'}`}>
                <h5 className={titleStyles}>
                    {title}
                </h5>
                <p className={textStyles}>
                    {text}
                </p>
            </div>
            <div className={`${imageBoxStyles} ${isImageOnLeft ? 'order-1' : 'order-3'}`}>
                <img
                    className={imageStyles}
                    src={imageSrc}
                    alt={title}
                />
            </div>
        </div>
    );
};

export default ConfigurableCard;