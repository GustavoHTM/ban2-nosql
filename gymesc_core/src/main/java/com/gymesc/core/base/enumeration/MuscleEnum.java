package com.gymesc.core.base.enumeration;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import lombok.Getter;

public enum MuscleEnum {
    // Peitoral
    PECTORAL_MAJOR,         // Peitoral Maior
    PECTORAL_MINOR,         // Peitoral Menor

    // Ombros
    DELTOID_FRONT,          // Deltoide Anterior
    DELTOID_SIDE,           // Deltoide Lateral
    DELTOID_REAR,           // Deltoide Posterior
    ROTATOR_CUFF,           // Manguito Rotador (conjunto de músculos)

    // Braços
    BICEPS_BRACHII  ,         // Bíceps Braquial
    BRACHIALIS,             // Braquial
    BRACHIORADIALIS,        // Braquiorradial
    TRICEPS_BRACHII,        // Tríceps Braquial
    ANCONAEUS,              // Ancôneo
    FOREARM_FLEXORS,        // Flexores do Antebraço
    FOREARM_EXTENSORS,      // Extensores do Antebraço

    // Costas
    LATISSIMUS_DORSI,       // Latíssimo do Dorso
    TRAPEZIUS_UPPER,        // Trapézio Superior
    TRAPEZIUS_MIDDLE,       // Trapézio Médio
    TRAPEZIUS_LOWER,        // Trapézio Inferior
    RHOMBOID_MAJOR,         // Romboide Maior
    RHOMBOID_MINOR,         // Romboide Menor
    TERES_MAJOR,            // Redondo Maior
    TERES_MINOR,            // Redondo Menor
    ERECTOR_SPINAE,         // Eretor da Espinha
    INFRASPINATUS,          // Infraespinhal
    SUPRASPINATUS,          // Supraespinhal

    // Abdômen e Core
    ABDOMINAL_RECTUS,       // Reto Abdominal
    OBLIQUES_EXTERNAL,      // Oblíquos Externos
    OBLIQUES_INTERNAL,      // Oblíquos Internos
    TRANSVERSE_ABDOMINIS,   // Transverso do Abdômen
    SERRATUS_ANTERIOR,      // Serrátil Anterior

    // Quadris e Glúteos
    GLUTEUS_MAXIMUS,        // Glúteo Máximo
    GLUTEUS_MEDIUS,         // Glúteo Médio
    GLUTEUS_MINIMUS,        // Glúteo Mínimo
    ILIOPSOAS,              // Iliopsoas
    TENSOR_FASCIAE_LATAE,   // Tensor da Fáscia Lata
    PIRIFORMIS,             // Piriforme

    // Pernas
    QUADRICEPS,             // Quadríceps (geral)
    RECTUS_FEMORIS,         // Reto Femoral
    VASTUS_LATERALIS,       // Vasto Lateral
    VASTUS_MEDIALIS,        // Vasto Medial
    VASTUS_INTERMEDIUS,     // Vasto Intermédio
    HAMSTRINGS,             // Isquiotibiais (geral)
    BICEPS_FEMORIS,         // Bíceps Femoral
    SEMITENDINOSUS,         // Semitendinoso
    SEMIMEMBRANOSUS,        // Semimembranoso
    ADDUCTORS,              // Adutores (geral)
    ADDUCTOR_LONGUS,        // Adutor Longo
    ADDUCTOR_BREVIS,        // Adutor Curto
    ADDUCTOR_MAGNUS,        // Adutor Magno
    GRACILIS,               // Grácil
    SARTORIUS,              // Sartório
    ABDUCTORS,              // Abdutores (geral)

    // Panturrilhas
    CALVES,                 // Panturrilhas (geral)
    GASTROCNEMIUS,          // Gastrocnêmio
    SOLEUS,                 // Sóleo
    TIBIALIS_ANTERIOR,      // Tibial Anterior
    TIBIALIS_POSTERIOR,     // Tibial Posterior

    // Pescoço
    STERNOCLEIDOMASTOID,    // Esternocleidomastóideo
    SCALENES,               // Escalenos
    SPLENIUS_CAPITIS,       // Esplênio da Cabeça

    // Músculos do Core Profundo
    MULTIFIDUS,             // Multífidos
    QUADRATUS_LUMBORUM,     // Quadrado Lombar

    // Outros músculos auxiliares
    LEVATOR_SCAPULAE,       // Levantador da Escápula
    OBLIQUE_EXTERNAL,       // Oblíquo Externo
    OBLIQUE_INTERNAL;        // Oblíquo Interno

    @Getter
    public static final Map<CategoryTypeEnum, List<MuscleEnum>> muscleMap = new HashMap<>();

    static {
        muscleMap.put(CategoryTypeEnum.CHEST, Arrays.asList(
                MuscleEnum.PECTORAL_MAJOR, MuscleEnum.PECTORAL_MINOR, MuscleEnum.SERRATUS_ANTERIOR));
        muscleMap.put(CategoryTypeEnum.SHOULDERS, Arrays.asList(
                MuscleEnum.DELTOID_FRONT, MuscleEnum.DELTOID_SIDE, MuscleEnum.DELTOID_REAR,
                MuscleEnum.ROTATOR_CUFF, MuscleEnum.TRAPEZIUS_UPPER));
        muscleMap.put(CategoryTypeEnum.ABS, Arrays.asList(
                MuscleEnum.ABDOMINAL_RECTUS, MuscleEnum.OBLIQUES_EXTERNAL,
                MuscleEnum.OBLIQUES_INTERNAL, MuscleEnum.TRANSVERSE_ABDOMINIS));
        muscleMap.put(CategoryTypeEnum.BICEPS, Arrays.asList(
                MuscleEnum.BICEPS_BRACHII, MuscleEnum.BRACHIALIS, MuscleEnum.BRACHIORADIALIS));
        muscleMap.put(CategoryTypeEnum.TRICEPS, Arrays.asList(
                MuscleEnum.TRICEPS_BRACHII, MuscleEnum.ANCONAEUS));
        muscleMap.put(CategoryTypeEnum.BACK, Arrays.asList(
                MuscleEnum.LATISSIMUS_DORSI, MuscleEnum.RHOMBOID_MAJOR, MuscleEnum.RHOMBOID_MINOR,
                MuscleEnum.TERES_MAJOR, MuscleEnum.TERES_MINOR, MuscleEnum.ERECTOR_SPINAE,
                MuscleEnum.INFRASPINATUS, MuscleEnum.SUPRASPINATUS));
        muscleMap.put(CategoryTypeEnum.LEGS, Arrays.asList(
                MuscleEnum.QUADRICEPS, MuscleEnum.RECTUS_FEMORIS, MuscleEnum.VASTUS_LATERALIS,
                MuscleEnum.VASTUS_MEDIALIS, MuscleEnum.VASTUS_INTERMEDIUS, MuscleEnum.HAMSTRINGS,
                MuscleEnum.BICEPS_FEMORIS, MuscleEnum.SEMITENDINOSUS, MuscleEnum.SEMIMEMBRANOSUS,
                MuscleEnum.ADDUCTORS, MuscleEnum.ADDUCTOR_LONGUS, MuscleEnum.ADDUCTOR_BREVIS,
                MuscleEnum.ADDUCTOR_MAGNUS, MuscleEnum.GRACILIS, MuscleEnum.SARTORIUS,
                MuscleEnum.ABDUCTORS));
        muscleMap.put(CategoryTypeEnum.GLUTES, Arrays.asList(
                MuscleEnum.GLUTEUS_MAXIMUS, MuscleEnum.GLUTEUS_MEDIUS, MuscleEnum.GLUTEUS_MINIMUS,
                MuscleEnum.ILIOPSOAS, MuscleEnum.TENSOR_FASCIAE_LATAE, MuscleEnum.PIRIFORMIS));
        muscleMap.put(CategoryTypeEnum.CALVES, Arrays.asList(
                MuscleEnum.CALVES, MuscleEnum.GASTROCNEMIUS, MuscleEnum.SOLEUS,
                MuscleEnum.TIBIALIS_ANTERIOR, MuscleEnum.TIBIALIS_POSTERIOR));
        muscleMap.put(CategoryTypeEnum.CARDIO, Collections.emptyList());
        muscleMap.put(CategoryTypeEnum.STRENGTH, Collections.emptyList());
        muscleMap.put(CategoryTypeEnum.FLEXIBILITY, Collections.emptyList());
        muscleMap.put(CategoryTypeEnum.BALANCE, Collections.emptyList());
        muscleMap.put(CategoryTypeEnum.ENDURANCE, Collections.emptyList());
        muscleMap.put(CategoryTypeEnum.FULL_BODY, Collections.emptyList());
        muscleMap.put(CategoryTypeEnum.FUNCTIONAL, Collections.emptyList());
        muscleMap.put(CategoryTypeEnum.REHABILITATION, Collections.emptyList());
    }

    public static MuscleEnum fromString(String muscle) {
        return Arrays.stream(MuscleEnum.values()).filter(m -> m.name().equalsIgnoreCase(muscle)).findFirst().orElse(null);
    }

    public static boolean contains(String muscle) {
        return Arrays.asList(MuscleEnum.values()).contains(fromString(muscle));
    }

    public static List<MuscleEnum> getMusclesByCategory(CategoryTypeEnum category) {
        return muscleMap.get(category);
    }

    public boolean isMuscleInCategory(CategoryTypeEnum category) {
        return muscleMap.get(category).contains(this);
    }
}
