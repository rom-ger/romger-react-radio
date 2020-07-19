import * as React from 'react';

interface RgReactRadioProps {
    checkedIcon?: any;
    uncheckedIcon?: any;
    className?: string;
    onClick?: () => any;
    disabled?: boolean;
    checked?: boolean;
    title?: string;
    customHTML?: any;
    dataTemplate?: string;
}

interface RgReactRadioGroupItem {
    checkedIcon?: any;
    uncheckedIcon?: any;
    title?: string;
    model: any;
    className?: string;
    disabled?: boolean;
    customHTML?: any;
}

interface RgReactRadioGroupProps {
    checkedIcon?: any;
    uncheckedIcon?: any;
    model: any;
    isChecked?: (model: any) => any;
    onChange?: (model: any) => any;
    modelField?: string;
    withoutModelField?: boolean;
    row?: boolean;
    items?: Array<RgReactRadioGroupItem>;
    disabled?: boolean;
    classNameForEachItem?: string;
    dataTemplate?: string;
}

export class RgReactRadio extends React.Component<RgReactRadioProps, any> {}
export class RgReactRadioGroup extends React.Component<RgReactRadioGroupProps, any> {}
