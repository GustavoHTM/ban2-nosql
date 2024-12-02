export enum MuscleEnum {
    // Peitoral
    PECTORAL_MAJOR = 'PECTORAL_MAJOR',         // Peitoral Maior
    PECTORAL_MINOR = 'PECTORAL_MINOR',        // Peitoral Menor

    // Ombros
    DELTOID_FRONT = 'DELTOID_FRONT',          // Deltoide Anterior
    DELTOID_SIDE = 'DELTOID_SIDE',            // Deltoide Lateral
    DELTOID_REAR = 'DELTOID_REAR',            // Deltoide Posterior
    ROTATOR_CUFF = 'ROTATOR_CUFF',            // Manguito Rotador

    // Braços
    BICEPS_BRACHII = 'BICEPS_BRACHII',        // Bíceps Braquial
    BRACHIALIS = 'BRACHIALIS',                // Braquial
    BRACHIORADIALIS = 'BRACHIORADIALIS',      // Braquiorradial
    TRICEPS_BRACHII = 'TRICEPS_BRACHII',      // Tríceps Braquial
    ANCONAEUS = 'ANCONAEUS',                  // Ancôneo
    FOREARM_FLEXORS = 'FOREARM_FLEXORS',      // Flexores do Antebraço
    FOREARM_EXTENSORS = 'FOREARM_EXTENSORS',  // Extensores do Antebraço

    // Costas
    LATISSIMUS_DORSI = 'LATISSIMUS_DORSI',    // Latíssimo do Dorso
    TRAPEZIUS_UPPER = 'TRAPEZIUS_UPPER',      // Trapézio Superior
    TRAPEZIUS_MIDDLE = 'TRAPEZIUS_MIDDLE',    // Trapézio Médio
    TRAPEZIUS_LOWER = 'TRAPEZIUS_LOWER',      // Trapézio Inferior
    RHOMBOID_MAJOR = 'RHOMBOID_MAJOR',        // Romboide Maior
    RHOMBOID_MINOR = 'RHOMBOID_MINOR',        // Romboide Menor
    TERES_MAJOR = 'TERES_MAJOR',              // Redondo Maior
    TERES_MINOR = 'TERES_MINOR',              // Redondo Menor
    ERECTOR_SPINAE = 'ERECTOR_SPINAE',        // Eretor da Espinha
    INFRASPINATUS = 'INFRASPINATUS',          // Infraespinhal
    SUPRASPINATUS = 'SUPRASPINATUS',          // Supraespinhal

    // Abdômen e Core
    ABDOMINAL_RECTUS = 'ABDOMINAL_RECTUS',    // Reto Abdominal
    OBLIQUES_EXTERNAL = 'OBLIQUES_EXTERNAL', // Oblíquos Externos
    OBLIQUES_INTERNAL = 'OBLIQUES_INTERNAL', // Oblíquos Internos
    TRANSVERSE_ABDOMINIS = 'TRANSVERSE_ABDOMINIS', // Transverso do Abdômen
    SERRATUS_ANTERIOR = 'SERRATUS_ANTERIOR', // Serrátil Anterior

    // Quadris e Glúteos
    GLUTEUS_MAXIMUS = 'GLUTEUS_MAXIMUS',      // Glúteo Máximo
    GLUTEUS_MEDIUS = 'GLUTEUS_MEDIUS',        // Glúteo Médio
    GLUTEUS_MINIMUS = 'GLUTEUS_MINIMUS',      // Glúteo Mínimo
    ILIOPSOAS = 'ILIOPSOAS',                  // Iliopsoas
    TENSOR_FASCIAE_LATAE = 'TENSOR_FASCIAE_LATAE', // Tensor da Fáscia Lata
    PIRIFORMIS = 'PIRIFORMIS',                // Piriforme

    // Pernas
    QUADRICEPS = 'QUADRICEPS',                // Quadríceps
    RECTUS_FEMORIS = 'RECTUS_FEMORIS',        // Reto Femoral
    VASTUS_LATERALIS = 'VASTUS_LATERALIS',    // Vasto Lateral
    VASTUS_MEDIALIS = 'VASTUS_MEDIALIS',      // Vasto Medial
    VASTUS_INTERMEDIUS = 'VASTUS_INTERMEDIUS', // Vasto Intermédio
    HAMSTRINGS = 'HAMSTRINGS',                // Isquiotibiais
    BICEPS_FEMORIS = 'BICEPS_FEMORIS',        // Bíceps Femoral
    SEMITENDINOSUS = 'SEMITENDINOSUS',        // Semitendinoso
    SEMIMEMBRANOSUS = 'SEMIMEMBRANOSUS',      // Semimembranoso
    ADDUCTORS = 'ADDUCTORS',                  // Adutores
    ADDUCTOR_LONGUS = 'ADDUCTOR_LONGUS',      // Adutor Longo
    ADDUCTOR_BREVIS = 'ADDUCTOR_BREVIS',      // Adutor Curto
    ADDUCTOR_MAGNUS = 'ADDUCTOR_MAGNUS',      // Adutor Magno
    GRACILIS = 'GRACILIS',                    // Grácil
    SARTORIUS = 'SARTORIUS',                  // Sartório
    ABDUCTORS = 'ABDUCTORS',                  // Abdutores

    // Panturrilhas
    CALVES = 'CALVES',                        // Panturrilhas
    GASTROCNEMIUS = 'GASTROCNEMIUS',          // Gastrocnêmio
    SOLEUS = 'SOLEUS',                        // Sóleo
    TIBIALIS_ANTERIOR = 'TIBIALIS_ANTERIOR',  // Tibial Anterior
    TIBIALIS_POSTERIOR = 'TIBIALIS_POSTERIOR', // Tibial Posterior

    // Pescoço
    STERNOCLEIDOMASTOID = 'STERNOCLEIDOMASTOID', // Esternocleidomastóideo
    SCALENES = 'SCALENES',                    // Escalenos
    SPLENIUS_CAPITIS = 'SPLENIUS_CAPITIS',    // Esplênio da Cabeça

    // Músculos do Core Profundo
    MULTIFIDUS = 'MULTIFIDUS',                // Multífidos
    QUADRATUS_LUMBORUM = 'QUADRATUS_LUMBORUM', // Quadrado Lombar

    // Outros músculos auxiliares
    LEVATOR_SCAPULAE = 'LEVATOR_SCAPULAE',    // Levantador da Escápula
    OBLIQUE_EXTERNAL = 'OBLIQUE_EXTERNAL',   // Oblíquo Externo
    OBLIQUE_INTERNAL = 'OBLIQUE_INTERNAL'    // Oblíquo Interno
}

export class MuscleEnumHelper {
    static values(): MuscleEnum[] {
        return Object.keys(MuscleEnum).filter(
            (type) => isNaN(<any>type)
        ).map(key => MuscleEnum[key as keyof typeof MuscleEnum]);
    }

    static keys(): string[] {
        return Object.keys(MuscleEnum).filter(
            (type) => isNaN(<any>type)
        );
    }
}
