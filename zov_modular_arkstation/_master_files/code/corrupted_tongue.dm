/datum/action/cooldown/hemophage/drain_victim/drain_victim(mob/living/carbon/hemophage, mob/living/carbon/victim)
	. = ..()
	if(victim.get_drunk_amount())
		hemophage.set_drunk_effect(victim.get_drunk_amount())
	if(victim.has_status_effect(/datum/status_effect/drugginess))
		hemophage.set_drugginess(15 SECONDS)