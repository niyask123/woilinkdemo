import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IoArrowBack } from 'react-icons/io5';
import * as yup from 'yup';
import { userTypes } from '../../../data/mainData';

const teamSchema = yup.object().shape({
  team: yup.string().required('Please select a team'),
});

const TeamSelector = ({ onBack, onContinue }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(teamSchema),
    mode: 'onChange',
  });

  // Keep form value in sync with selectedCategory
  useEffect(() => {
    if (selectedCategory) {
      setValue('team', selectedCategory);
    }
  }, [selectedCategory, setValue]);

  const onSubmit = (data) => {
    console.log('Selected Team:', data.team);
    onContinue();
  };

  const handleSelect = (id) => {
    setSelectedCategory(id);
  };

  return (
    <div className="relative flex flex-col w-full px-6 md:px-16 min-h-screen pt-24 lg:w-[calc(100vw-52%)]">
      <div className="w-full h-full md:max-w-[480px] mx-auto pb-12">
        <div className="flex flex-col gap-4">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center text-xs gap-1 bg-gray-100 border border-gray-100 px-4 py-2 rounded-lg hover:bg-white hover:border-gray-300 transition"
          >
            <IoArrowBack className="text-sm" /> Back
          </button>

          <div className="my-5">
            <h2 className="text-4xl font-bold text-start">
              Woilink helps you collect and share business info at every single event
            </h2>
          </div>

          <p className="text-start text-lg font-normal text-gray-500">
            Who will be using Woilink?
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 mt-6 w-full">
          {/* Hidden input for form */}
          <input type="hidden" {...register('team')} />

          <div className="relative mx-auto w-full">
            <div className="mx-auto max-w-[500px] flex flex-col transition-opacity duration-500 opacity-100">
              {userTypes.map((user) => (
                <div
                  key={user.id}
                  onClick={() => handleSelect(user.id)}
                  className={`w-full border mt-5 p-4 rounded-2xl flex hover:bg-gray-100 flex-row justify-between cursor-pointer transition-all duration-300 ${
                    selectedCategory === user.id
                      ? 'outline-1 outline-black ring-1 ring-inset'
                      : 'border-gray-300'
                  }`}
                >
                  <div className="flex flex-col justify-center">
                    <div className="text-base font-semibold">{user.title}</div>
                    <div className="text-sm font-medium text-gray-600 pr-10">
                      {user.description}
                    </div>
                  </div>
                  <div className="w-20">
                    <img
                      src={user.image}
                      className="object-contain rounded-xl"
                      alt={user.title}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {errors.team && (
            <p className="text-red-500 text-sm mt-1">{errors.team.message}</p>
          )}

          <button type="submit" className="btn btn-primary mt-4">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeamSelector;
