import { FlexBox } from '@romger/react-flex-layout';
import classnames from 'classnames';
import React from 'react';

class RgReactRadio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { checkedIcon, uncheckedIcon } = this.props;
        return (
            <FlexBox
                row="start center"
                className={classnames(
                    this.props.className ? this.props.className : [],
                )}
            >
                <FlexBox
                    row="start center"
                    onClick={() => this.props.onClick && !this.props.disabled ? this.props.onClick() : null}
                    className={classnames(
                        'rg-react-radio',
                        {
                            'rg-react-radio--disabled': !!this.props.disabled,
                        },
                    )}
                >
                    {
                        !!checkedIcon && !!uncheckedIcon
                            ?
                            this.props.checked
                                ?
                                checkedIcon
                                :
                                uncheckedIcon
                            :
                            <FlexBox
                                row="ctr"
                                className={classnames(
                                    'rg-react-radio__check-wrap',
                                    {
                                        'rg-react-radio__check-wrap--checked': !!this.props.checked,
                                        'rg-react-radio__check-wrap--disabled': !!this.props.disabled,
                                    },
                                )}
                            >
                                {
                                    !!this.props.checked &&
                                    <div
                                        className={classnames(
                                            'rg-react-radio__icon-check',
                                            {
                                                'rg-react-radio__icon-check--disabled': !!this.props.disabled,
                                            },
                                        )}
                                    />
                                }
                            </FlexBox>
                    }
                    {
                        !!this.props.title && !this.props.customHTML &&
                        <div
                            className={classnames(
                                'rg-react-radio--title',
                            )}
                            data-template={this.props.dataTemplate}
                        >
                            {this.props.title}
                        </div>
                    }
                </FlexBox>
                {
                    !!this.props.customHTML && this.props.customHTML
                }
            </FlexBox>
        );
    }
}

export default RgReactRadio;
