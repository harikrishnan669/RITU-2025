export default function ContactCard({ name, position, contact}) {
    return (
        <div
            className="shadow-xl rounded-xl overflow-hidden mx-auto border border-white/30 w-[300px]  max-sm:w-full text-gray-800 bg-white/80 px-10 py-8 space-y-2">
            <h3 className="text-xl font-semibold text-center">{name}</h3>
            <p className="text-gray-600 text-center">{position}</p>
            <p className="text-gray-500 text-sm text-center">{contact}</p>
        </div>
    );
}