import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Screen2Props {
  setScreen: (screen: number) => void;
}

const Screen2: React.FC<Screen2Props> = ({ setScreen }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    snils: '',
    phone: '',
    maksimAss: '',
    kuhar: '',
    psychic: '',
    psychologicalAge: '',
    birthDate: null as Date | null,
    dotaNick: '',
    ranetka: '',
    fortniteHours: '',
    childrenCount: '',
    pension: '',
    anime: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    // СНИЛС (только цифры, 11 штук)
    if (!/^\d{11}$/.test(formData.snils.replace(/\D/g, ''))) {
      newErrors.snils = 'СНИЛС должен состоять из 11 цифр';
    }

    // Номер телефона (русский формат)
    if (!/^(\+7|8)?\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}$/.test(formData.phone)) {
        newErrors.phone = 'Неверный формат номера телефона';
    }

    // Fortnite hours (только число)
    if (formData.fortniteHours && !/^\d+$/.test(formData.fortniteHours)) {
        newErrors.fortniteHours = 'Введите число';
    }
    
    setErrors(newErrors);
    
    const allFieldsFilled = Object.values(formData).every(value => value !== '' && value !== null);
    
    return Object.keys(newErrors).length === 0 && allFieldsFilled;
  };
  
  const handleChange = (field: string, value: any) => {
    if (formError) {
      setFormError(null);
    }
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const isValid = validate();
    if (isValid) {
      setScreen(3);
    } else {
      setFormError('Нужно все сначала заполнить и исправить ошибки');
    }
  };

  const psychicOptions = ['Шепс', 'Шепс', 'Шепс', 'Шепс'];

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
      <h2>Чтобы удалить данные из прошмандовок пожалуйста заполните анкету</h2>
      <form>
        <div>
          <label htmlFor="name">Имя</label>
          <input type="text" id="name" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} />
        </div>
        <div>
          <label htmlFor="surname">Фамилия</label>
          <input type="text" id="surname" value={formData.surname} onChange={(e) => handleChange('surname', e.target.value)} />
        </div>
        <div>
            <label htmlFor="snils">СНИЛС</label>
            <input type="text" id="snils" value={formData.snils} onChange={(e) => handleChange('snils', e.target.value)} />
            {errors.snils && <p style={{color: 'red'}}>{errors.snils}</p>}
        </div>
        <div>
            <label htmlFor="phone">Номер Телефона</label>
            <input type="text" id="phone" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} />
            {errors.phone && <p style={{color: 'red'}}>{errors.phone}</p>}
        </div>
        <div>
            <label htmlFor="maksimAss">Что у Маскима на попе?</label>
            <input type="text" id="maksimAss" value={formData.maksimAss} onChange={(e) => handleChange('maksimAss', e.target.value)} />
        </div>
        <div>
            <label htmlFor="kuhar">пОЧЕМУ КУХАРЯ НЕ БЫЛО НА Лапте?</label>
            <input type="text" id="kuhar" value={formData.kuhar} onChange={(e) => handleChange('kuhar', e.target.value)} />
        </div>
        <div>
            <label htmlFor="psychic">Любимый Экстрасенс</label>
            <select id="psychic" value={formData.psychic} onChange={(e) => handleChange('psychic', e.target.value)}>
                <option value="" disabled>Выберите</option>
                {psychicOptions.map((option, index) => <option key={index} value={option}>{option}</option>)}
            </select>
        </div>
        <div>
            <label htmlFor="psychologicalAge">Ваш психологический возраст</label>
            <select id="psychologicalAge" value={formData.psychologicalAge} onChange={(e) => handleChange('psychologicalAge', e.target.value)}>
                 <option value="" disabled>Выберите</option>
                {Array.from({ length: 100 }, (_, i) => i + 1).map(age => <option key={age} value={age}>{age}</option>)}
            </select>
        </div>
        <div>
            <label htmlFor="birthDate">Дата рождения</label>
            <DatePicker 
                id="birthDate"
                selected={formData.birthDate} 
                onChange={(date) => handleChange('birthDate', date)} 
                dateFormat="dd/MM/yyyy"
                />
        </div>
         <div>
            <label htmlFor="dotaNick">Ник в доте</label>
            <input type="text" id="dotaNick" value={formData.dotaNick} onChange={(e) => handleChange('dotaNick', e.target.value)} />
        </div>
        <div>
            <label htmlFor="ranetka">кто вы? из ранеток</label>
            <input type="text" id="ranetka" value={formData.ranetka} onChange={(e) => handleChange('ranetka', e.target.value)} />
        </div>
        <div>
            <label htmlFor="fortniteHours">Сколько часов в фортнайте?</label>
            <input type="text" id="fortniteHours" value={formData.fortniteHours} onChange={(e) => handleChange('fortniteHours', e.target.value)} />
            {errors.fortniteHours && <p style={{color: 'red'}}>{errors.fortniteHours}</p>}
        </div>
        <div>
            <label htmlFor="childrenCount">Сколько у вас детей</label>
            <select id="childrenCount" value={formData.childrenCount} onChange={(e) => handleChange('childrenCount', e.target.value)}>
                <option value="" disabled>Выберите</option>
                {Array.from({ length: 100 }, (_, i) => i + 1).map(count => <option key={count} value={count}>{count}</option>)}
            </select>
        </div>
        <div>
            <label htmlFor="pension">Получаете ли вы пенсию по инвалидности?</label>
            <select id="pension" value={formData.pension} onChange={(e) => handleChange('pension', e.target.value)}>
                <option value="" disabled>Выберите</option>
                <option value="yes">Да</option>
                <option value="no">Нет</option>
            </select>
        </div>
        <div>
            <label htmlFor="anime">любите ли вы аниме также как коко колу?</label>
            <select id="anime" value={formData.anime} onChange={(e) => handleChange('anime', e.target.value)}>
                <option value="" disabled>Выберите</option>
                <option value="yes">Да</option>
                <option value="no">Нет</option>
            </select>
        </div>
        
        {formError && <p style={{color: 'red', textAlign: 'center'}}>{formError}</p>}
        <button
          type="button"
          onClick={handleSubmit}
          style={{ width: '100%', marginTop: '10px' }}
        >
          Далее
        </button>
      </form>
    </div>
  );
};

export default Screen2;
