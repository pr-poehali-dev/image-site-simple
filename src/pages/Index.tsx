const Index = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black">
      <div className="absolute inset-0 animate-fade-in">
        <img 
          src="https://cdn.poehali.dev/files/e1a6219e-5cd2-4e2e-8c9d-9585eea275b8.jpeg"
          alt="Ночной пейзаж"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 bg-black/20 animate-fade-in" />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center animate-scale-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 animate-fade-in [animation-delay:0.3s] opacity-0 [animation-fill-mode:forwards]">
            я люблю тебя, Кирилл
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Index;