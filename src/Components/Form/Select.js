import React from 'react';
import styles from './Select.module.css';

const Select = ({ options, value, setValue, ...props }) => {
  return (
    <div>
      <select defaultValue="default" className={styles.select} {...props}>
        <option value={'default'} defaultValue={'default'} disabled>
          Selecione a moeda
        </option>
        {options.map((option, key) => (
          <option
            key={key}
            value={option.value}
            label={`${option.label} (${option.value})`}
          />
        ))}
      </select>
    </div>
  );
};

export default Select;
