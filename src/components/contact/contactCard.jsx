
export default function ContactCard({ imgSource, name, position, contact }) {
    return (
        <div className="shadow-xl rounded-3xl overflow-hidden max-w-sm mx-auto  bg-[#424242]/8 border border-white/30">
            <div className="w-full h-64  overflow-hidden">
                <img 
                    className="w-full h-full object-cover object-center" 
                    src={imgSource} 
                    alt={name} 
                />
            </div>
            <div className="flex flex-col justify-center items-center text-gray-800 bg-white/80 p-6 space-y-2">
                <h3 className="text-xl font-semibold text-center">{name}</h3>
                <p className="text-gray-600 text-center">{position}</p>
                <p className="text-gray-500 text-sm text-center">{contact}</p>
            </div>
        </div>
    );
}