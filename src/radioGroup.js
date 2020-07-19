import { FlexBox } from '@thewhite/react-flex-layout';
import classnames from 'classnames';
import React from 'react';
import RgReactRadio from './radio';

/**
 * Компонент для отображения группы радио кнопок
 * props:
 * Boolean row - true, если элементы надо вывести в строку
 * Object/String model - то, что на данный момент выбрано
 * String modelField - по какому полю в модели сравнивать элементы
 * Boolean withoutModelField - true, если сравнивать надо не по полю в модели, а саму модель полностью
 * Object checkedIcon - иконка для любых выбранных элементов в группе
 * Object uncheckedIcon - иконка для любых не выбранных элементов в группе
 * Boolean disabled - true, если вся группа не активна,
 * Function onChange - функция обратного вызова, который принимает на вход модель из выбранного элемента из группы
 * Function isChecked - функция обратного вызова, который принимает на вход модель из элемента группы и говорит, выбран он или нет
 * String classNameForEachItem - классы, которые надо навесить на каждый элемент в группе
 * Array items - элементы группы
 * String items[i].title - подпись к элементу
 * Object/String items[i].model - сущность в элементе, которую выбираем
 * Object items[i].checkedIcon - иконка, если элемент выбран
 * Object items[i].uncheckedIcon - иконка, если элемент не выбран
 * Object items[i].customHTML - если вместо title нам надо вывести какую-то свою вёрстку
 * Boolean items[i].disabled - true, если элемент не активен
 * String items[i].className - классы, которые надо навесить на этот элемент
 * String dataTemplate - data атрибут шаблона
 */
class RgReactRadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.DEFAULT_MODEL_FIELD = 'id';
    }

    /**
     * это не существующая модель
     * @param {*} model
     */
    isNullModel(model) {
        return model === undefined || model === null;
    }

    /**
     * Получить кастомную иконку для выбранного элемента
     * @param {*} item
     */
    getCheckedIcon(item) {
        if (item.checkedIcon) {
            return item.checkedIcon;
        }
        if (this.props.checkedIcon) {
            return this.props.checkedIcon;
        }
        return null;
    }

    /**
     * Получить кастомную иконку для не выбранного элемента
     * @param {*} item
     */
    getUncheckedIcon(item) {
        if (item.uncheckedIcon) {
            return item.uncheckedIcon;
        }
        if (this.props.uncheckedIcon) {
            return this.props.uncheckedIcon;
        }
        return null;
    }

    /**
     * Понимаем, выбран или нет элемент
     * @param {*} item
     */
    isCheckedItem(item) {
        if (this.isNullModel(this.props.model) || this.isNullModel(item.model)) {
            return false;
        }
        if (this.props.isChecked) {
            return this.props.isChecked(item.model);
        }
        let modelField = this.props.modelField || this.DEFAULT_MODEL_FIELD;
        if (this.props.withoutModelField) {
            return item.model === this.props.model;
        }
        return item.model[modelField] === this.props.model[modelField];
    }

    render() {
        const params = this.props.row ? { rowWrap: 'start center' } : { column: 'start stretch' };

        return (
            React.createElement(FlexBox, params, this.props.items.map((item, key) =>
                <RgReactRadio
                    key={key}
                    checked={this.isCheckedItem(item)}
                    onClick={() => this.props.onChange && !this.props.disabled && !item.disabled ? this.props.onChange(item.model) : null}
                    checkedIcon={this.getCheckedIcon(item)}
                    uncheckedIcon={this.getUncheckedIcon(item)}
                    className={classnames(
                        this.props.classNameForEachItem ? this.props.classNameForEachItem : [],
                        item.className ? item.className : [],
                    )}
                    disabled={!!this.props.disabled || !!item.disabled}
                    title={item.title}
                    customHTML={item.customHTML}
                    dataTemplate={this.props.dataTemplate}
                />,
            ))
        );
    }
}

export default RgReactRadioGroup;
