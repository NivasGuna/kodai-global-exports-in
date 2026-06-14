'use client';

import React from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { FormInput } from '@/components/shared/FormInput';
import { FormTextarea } from '@/components/shared/FormTextarea';
import contactContent from './contact.json';
import { Label } from '@/components/ui/label';
import { FadeIn } from '@/components/shared/FadeIn';
import { useContactForm } from './hooks/useContactForm';
import { PremiumPageHero } from '@/components/shared/PremiumPageHero';
import { ImageCTA } from '@/components/shared/ImageCTA';

const iconMap: Record<string, React.ElementType> = {
  Mail,
  Phone,
  MapPin,
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    errors,
    formStatus,
    isVerified,
    setValue,
    clearErrors,
    onSubmit,
    address,
    mapQuery,
    mapEmbedUrl,
  } = useContactForm();

  return (
    <main className="pb-24">
      <PremiumPageHero
        variant="contact"
        badge={contactContent.hero.badge}
        title={contactContent.hero.title}
        description={contactContent.hero.subtitle}
        trustPoints={contactContent.hero.features}
        imageSrc={contactContent.hero.imageSrc}
        imageAlt={contactContent.hero.imageAlt}
        buttonText={contactContent.hero.buttonText}
        buttonHref={contactContent.hero.buttonHref}
      />

      <div className="mx-auto mt-12 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-12">
            <FadeIn>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-kodai-gold">
                {contactContent.info.title}
              </span>
              <h2 className="mt-3 font-playfair text-3xl font-medium text-kodai-charcoal sm:text-4xl">
                {contactContent.info.subtitle}
              </h2>
            </FadeIn>

            <div className="flex flex-col gap-8">
              {contactContent.info.items.map((item, index) => {
                const IconComponent = iconMap[item.icon] || Mail;
                return (
                  <FadeIn
                    key={index}
                    delay={index * 0.1}
                    className="flex items-start gap-6 border-b border-gray-100 pb-8 last:border-0"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#faf6ee] text-kodai-charcoal">
                      <IconComponent size={24} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-gray-500">
                        {item.label}
                      </p>
                      <p className="mt-2 text-lg font-medium text-kodai-charcoal">
                        {item.value}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            <div className="border-l-2 border-kodai-gold py-2 pl-6">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-kodai-gold">
                {contactContent.extra.badge}
              </p>
              <p className="mt-3 text-base leading-relaxed text-kodai-charcoal">
                {contactContent.extra.description}
              </p>
            </div>
          </div>

          <div>
            <div
              id="contact-form"
              className="scroll-mt-32 rounded-[2.5rem] bg-white p-8 border border-kodai-charcoal/5 shadow-sm sm:p-12 lg:p-16"
            >
              <FadeIn delay={0.2} className="mb-12">
                <h2 className="font-playfair text-3xl font-medium text-kodai-charcoal sm:text-4xl">
                  {contactContent.form.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  {contactContent.form.description}
                </p>
              </FadeIn>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    label={contactContent.form.fields.name.label}
                    placeholder={contactContent.form.fields.name.placeholder}
                    required
                    registration={register('name', {
                      required: contactContent.form.fields.name.error.required,
                    })}
                    error={errors.name?.message as string}
                  />
                  <FormInput
                    type="email"
                    label={contactContent.form.fields.email.label}
                    placeholder={contactContent.form.fields.email.placeholder}
                    required
                    registration={register('email', {
                      required: contactContent.form.fields.email.error.required,
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: contactContent.form.fields.email.error.invalid,
                      },
                    })}
                    error={errors.email?.message as string}
                  />
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <FormInput
                    label={contactContent.form.fields.country.label}
                    placeholder={contactContent.form.fields.country.placeholder}
                    required
                    registration={register('country', {
                      required: contactContent.form.fields.country.error.required,
                    })}
                    error={errors.country?.message as string}
                  />
                  <FormTextarea
                    rows={5}
                    label={contactContent.form.fields.message.label}
                    placeholder={contactContent.form.fields.message.placeholder}
                    required
                    registration={register('message', {
                      required: contactContent.form.fields.message.error.required,
                    })}
                    error={errors.message?.message as string}
                  />
                </div>

                <div className="border border-dashed border-black/10 px-4 py-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="hidden"
                      id="robot-hidden"
                      {...register('robot', {
                        required: contactContent.form.fields.robot.error.required,
                      })}
                    />
                    <Checkbox
                      id="robot"
                      checked={isVerified}
                      onCheckedChange={(checked) => {
                        setValue('robot', checked === true);
                        if (checked === true) clearErrors('robot');
                      }}
                      className={`w-5 h-5 rounded data-[state=checked]:bg-kodai-charcoal data-[state=checked]:border-kodai-charcoal ${errors.robot ? 'border-red-500 border-2' : ''}`}
                    />
                    <Label
                      htmlFor="robot"
                      className="text-sm font-medium leading-none cursor-pointer select-none"
                    >
                      {contactContent.form.fields.robot.label}
                    </Label>
                  </div>
                  {errors.robot && (
                    <p className="mt-2 text-sm font-medium text-red-500 animate-fade-in">
                      {errors.robot.message as string}
                    </p>
                  )}
                </div>

                <Button
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                  className={`w-full rounded-full py-7 text-lg font-bold text-white transition-all duration-300 overflow-hidden ${
                    formStatus === 'success'
                      ? 'border-none bg-emerald-500 hover:bg-emerald-600'
                      : 'border-none bg-kodai-charcoal hover:bg-black'
                  } ${formStatus === 'submitting' ? 'opacity-80' : ''}`}
                >
                  <div className="flex items-center justify-center gap-2">
                    {formStatus === 'idle' && (
                      <>
                        {contactContent.form.buttonText}
                        <Send size={20} />
                      </>
                    )}
                    {formStatus === 'submitting' && (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    )}
                    {formStatus === 'success' && (
                      <>
                        {contactContent.status.success}
                        <CheckCircle2 size={20} />
                      </>
                    )}
                  </div>
                </Button>
              </form>
            </div>
          </div>
        </div>

        <section className="mt-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-kodai-gold">
              {contactContent.map.badge}
            </p>
            <h3 className="mt-4 font-playfair text-3xl font-medium leading-tight text-kodai-charcoal sm:text-4xl">
              {contactContent.map.title}
            </h3>
            <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-gray-600">
              {address}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-kodai-charcoal px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:-translate-y-1 hover:bg-black"
            >
              <MapPin size={18} className="text-kodai-gold" /> {contactContent.map.buttonText}
            </a>
          </div>

          <div className="mt-12 h-[500px] overflow-hidden rounded-[2rem] border-2 border-[#faf6ee] shadow-xl bg-white p-2">
            <div className="h-full w-full overflow-hidden rounded-[1.5rem] bg-gray-100">
              <iframe
                title={contactContent.map.accessibilityLabel}
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0 filter contrast-[1.1] grayscale-[0.2]"
              />
            </div>
          </div>
        </section>

        <div className="mt-16">
          <ImageCTA
            title={contactContent.cta.title}
            description={contactContent.cta.description}
            buttonText={contactContent.cta.buttonText}
            buttonHref={contactContent.cta.buttonHref}
            backgroundImage={contactContent.cta.imageSrc}
            imageAlt={contactContent.cta.imageAlt}
            badge={contactContent.cta.badge}
            imageClassName="object-center"
          />
        </div>
      </div>
    </main>
  );
}
