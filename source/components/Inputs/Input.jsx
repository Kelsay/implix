import React from 'react';

export default class Input extends React.Component {

    render() {
        const {type, placeholder, className = '', ...other} = this.props; // Destructure properties
        let label, input = null,
            combinedClassName = 'input ' + className;

        // Insert placeholder if there is no value
        if (this.props.value === null || this.props.value === '') {
            label = <div className="placeholder">{placeholder}</div>;
        }

        // Switch input type
        if (type === 'textarea') {
            input = <textarea {...other}></textarea>;
        } else {
            input = <input type={type} {...other} />;
        }

        return (
            <div className={combinedClassName}>
                {label}
                {input}
                {this.props.children}
            </div>
        );
    }

}
